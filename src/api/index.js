//所有请求的接口的方法

//请求的axios
import axios from "axios";

//接口地址
import base from "./base";

const api = {
    //病毒信息获取
    getCovInfo(){
        return axios.get(base.host+base.covInfo) //get()后加上URL
        //相当于axios.get(http://api.tianapi.com/ncov/index?key=e5c7988b3c46963eb8d8f3a13db36d9e)

    }
}

export default api