// Action
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';

// initialState 
// 초기 상태값
const initialState = {list: ["치킨 먹기", "컴퓨터 게임하기", "여행 가기"]};

// Action Creators
export const loadBucket = (bucket) => { 
    // 불러오는 기능은 어떤 데이터를 줄 필요가 없지만 아래와 모양새를 맞추기 위해 추가.
    return {type: LOAD, bucket};
}

export const createBucket = (bucket) => {
    // 타입뿐만 아니라 데이터도 필요하다. 
    //CreateBucket 같은 경우에는 추가할 값이 필요하다.
    return {type: CREATE, bucket};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      // do reducer stuff
      case "bucket/LOAD":
        return state;
  
      case "bucket/CREATE":
        const new_bucket_list = [...state.list, action.bucket];
        return {list: new_bucket_list};
  
      default:
        return state;
    }
  }