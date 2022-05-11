import { SafeAreaView, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProductCard from '../../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { decrementFav, incrementFav, setFavData } from '../../Redux/actions/updateFavoriteAction/updateFavoriteAction';

const Favorite = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [renderData, setrenderData] = useState(favData);
  const [Data, setData] = useState([])
  
  const favData = useSelector(
    state => state.favCounter.favData
  )

  const favContainer = useSelector(
    state => state.favCounter.favoriteCount
)

  const onPressHandler = id => {
    let renderData = [...favData];
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

  const filterData = () => {
    setData(favData.filter(item => item.selceted === true))
  }

  useEffect(() => {
    if (favContainer > 0) {
      filterData()
    }else {
      setData(null)
    }
    
  }, [favData])

  return (
    <SafeAreaView>
      <FlatList 
          data={Data}
          renderItem={itemData => {
            return <ProductCard item={itemData.item} navigation={navigation} onPressHandler={onPressHandler} />
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}/>
    </SafeAreaView>
  )
}

export default Favorite