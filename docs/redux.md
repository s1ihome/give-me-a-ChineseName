



#### redux规范

redux用了redux-actions

https://github.com/acdlite/redux-actions

每一块业务将只在一个redux文件中，具体可看 redux.model.js

接口用了fetch + async await，写法会更统一，扩展性更高，可直接进行回调

如： apiRequest.then()

```

以下为接口写法：

import yoyi from '../util/fetch'
const apiRequest = payload => async (dispatch) => {
    try {
        const response = await yoyi.get(url, payload)
        console.log(response, 'resolve');
        //code = 200
    } catch (e) {
        //code >= 400
        console.log(e, 'reject');
    }
}

```
