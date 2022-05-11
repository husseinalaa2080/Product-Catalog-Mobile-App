import { AppState, View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native'
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'
import Header from '../../Components/Header';
import { IMAGES } from '../../Common/images';
import { getCategoriesAction } from '../../Redux/actions/categoriesAction/getCategoriesAction';
import { useDispatch, useSelector } from 'react-redux';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { getProductListAction } from '../../Redux/actions/productListAction/getProductListAction';
import { useNavigation } from '@react-navigation/native';
import { decrementFav, incrementFav, resetFav, setNum, setFavData } from '../../Redux/actions/updateFavoriteAction/updateFavoriteAction';
import ProductCard from '../../Components/ProductCard';

const Catalogue = (props) => {
  const [currentFilter, setcurrentFilter] = useState('All')
  const [Data, setData] = useState([])
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [renderData, setrenderData] = useState(getProductListSuccess);
  const [numFav, setnumFav] = useState(0)
  const onPressHandler = id => {
    let renderData = [...getProductListSuccess];
    for (let data of renderData) {
      if (data.id === id) {
        data.selceted = data.selceted == null ? true : !data.selceted;
        data.selceted === null || data.selceted === false ? dispatch(decrementFav()) : dispatch(incrementFav())
        break;
      }
    }
    setrenderData({ renderData });
    dispatch(setFavData(renderData))
  };

  //get categories
  useLayoutEffect(() => {    
    dispatch(getCategoriesAction())
  }, [getCategoriesLoading, getCategoriesSuccess])

  const getCategoriesSuccess = useSelector(
    state => state.categories.success,
  );
  const getCategoriesFailure = useSelector(
    state => state.categories.fail,
  );
  const getCategoriesLoading = useSelector(
    state => state.categories.loading,
  );
  // get product list
  useEffect(() => {
    dispatch(getProductListAction())
  }, [getProductListLoading, getProductListSuccess])
  

  const getProductListSuccess = useSelector(
    state => state.productList.success,
  );
  const getProductListFailure = useSelector(
    state => state.productList.fail,
  );
  const getProductListLoading = useSelector(
    state => state.productList.loading,
  );

  const filterData = () => {
    setData(getProductListSuccess.filter(item => item.category === currentFilter))
  }

  useEffect(() => {
    filterData()
  }, [currentFilter])
  // reset state will remove on real api
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useLayoutEffect(() => {
    for (const item of getProductListSuccess) {
      if (!item.selceted) {
        dispatch(resetFav())
      }
    }
  }, [])

  useLayoutEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive/) &&
        nextAppState === "active"
      ) {
        dispatch(resetFav())
        
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, [appState]);


  const HeaderItem = (item => {
    return(
      <TouchableOpacity 
        onPress={() => setcurrentFilter(item.index)}
        style={[styles.filter, currentFilter === item.index ? styles.activeTab : null]}>
        <Text style={[styles.filterText, currentFilter === item.index ? styles.activeText : null]}>{item}</Text>
      </TouchableOpacity>
    )
  })

  const Card = (({item}) => {
    return(
      <TouchableOpacity 
        onPress={() => navigation.navigate('ProductDetails', {item : item})}
        style={styles.card}>
        <Image 
          source={{uri : item.image}}
          resizeMode='cover'
          style={styles.dummy}/>
        <TouchableOpacity 
          onPress={() => onPressHandler(item.id)}
          style={styles.heartContainer}>
          <Image 
            source={item.selceted ? IMAGES.fav : IMAGES.heart}
            resizeMode='contain'
            style={styles.heart}/>
        </TouchableOpacity>
        <Text
          style={styles.cardDetails}
          numberOfLines={2}>{item.title}</Text>
        <Text style={styles.cardPrice}>${item.price}</Text>
      </TouchableOpacity>
    )
  })

  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <View>
        {getCategoriesLoading ?
        <ActivityIndicator /> : 
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          >
          <TouchableOpacity 
                onPress={() => setcurrentFilter('All')}
                style={[styles.filter, currentFilter === 'All' ? styles.activeTab : null]}>
                <Text style={[styles.filterText, currentFilter === 'All' ? styles.activeText : null]}>{'All'}</Text>
              </TouchableOpacity>
          {getCategoriesSuccess.map((d, index) => {
            return (
              <TouchableOpacity 
                key={index}
                onPress={() => setcurrentFilter(d)}
                style={[styles.filter, currentFilter === d ? styles.activeTab : null]}>
                <Text style={[styles.filterText, currentFilter === d ? styles.activeText : null]}>{d}</Text>
              </TouchableOpacity>
            )
          })}
          <View style={{marginRight : widthPercentageToDP('2.5%')}}/>
        </ScrollView>}
        {getProductListLoading ? <ActivityIndicator /> : 
        <Text style={styles.totalItems}>{getProductListSuccess.length > 1 ? `${getProductListSuccess.length} items` : `${getProductListSuccess.length} item`}</Text>
        }
      </View>
      {getProductListLoading ? 
        <ActivityIndicator /> : 
        <FlatList 
          data={currentFilter === 'All' ? getProductListSuccess : Data}
          renderItem={itemData => {
            return <ProductCard item={itemData.item} navigation={navigation} onPressHandler={onPressHandler}/>
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}/>
      }
    </SafeAreaView>
  )
}

export default Catalogue