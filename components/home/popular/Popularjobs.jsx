import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { useRouter } from "expo-router";

import styles from './popularjobs.style'
import { SIZES, COLORS } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";


const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch
    ('search', {
      query: 'React Developer',
      num_pages: 1
    })
  //console.log(data);

  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Expand</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size="large" colors={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) :
            (
              <FlatList showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                  <PopularJobCard
                    item={item}
                    selectedJob={selectedJob}
                    handleCardPress={handleCardPress}
                  />
                )}
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                horizontal
              />
            )
        }
      </View>
    </View>
  )
}

export default Popularjobs

{/* <View style={styles.cardsContainer}>
        {isLoading ?
         (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) 
        : error
         ? (
          <Text>Something went wrong</Text>
        ) 
        : (
          <FlatList showsHorizontalScrollIndicator={false}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
              
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View> */}
