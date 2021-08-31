import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBucket } from "./redux/modules/bucket";
import { useEffect } from "react";
import { Route } from "react-router";

const App = () => {
  //const [변수명] = useSelector(state => state.[리덕스 state]);
  //store에 넣어준 리듀서 bucket의 리턴 값에서 key가 list인 값을 가져옴
  const bucket_list = useSelector(state => state.bucket.list);
  const dispatch = useDispatch();

  useEffect(() => { console.log(bucket_list) }, [])

  return (
    <Route path="/">
      <div>
        <button onClick={() => { dispatch(createBucket("피자 먹기")) }}>state 추가</button>
        {bucket_list.map((item, idx) => {
          return (
            <div key={idx}>
              {item}
            </div>
          )
        })}
      </div>
    </Route>

  )
}

export default App;