
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loading from '../../../../../components/Loading';
import UserDataList from './UserDataList';
import { Root, ScrollLoadingWrapper } from './styles';

const UserData = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{}]);
  const [hasMore, setHasMore] = useState(true);
  const [nextDataPage, setNextDataPage] = useState(2);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line no-use-before-define
  }, [url]);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }, 500);
  };

  const fetchMoreData = () => {
    if (hasMore === true) {
      let num = nextDataPage;
      setTimeout(() => {
        fetch(`${url}?page=${num}`)
          .then(response => response.json())
          .then(data => {
            if (data.length > 0) {
              setHasMore(true);
              setNextDataPage(prev => prev + 1);
              setData(prev => [...prev, ...data]);
            } else {
              setHasMore(false);
              setNextDataPage(2);
            }
          })
      }, 500);
    }
  };

  if (loading) return <ScrollLoadingWrapper><Loading /></ScrollLoadingWrapper>;

  return (
    <Root>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        loader={<ScrollLoadingWrapper><Loading /></ScrollLoadingWrapper>}
        hasMore={hasMore}>
        {loading === true ? (
          <Loading />
        ) : (
          <UserDataList repos={!!data[0].full_name} data={data} />
        )}
      </InfiniteScroll>
    </Root>
  );
};

export default UserData;
