import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infos: null,
    infosCollect: JSON.parse(window.localStorage.getItem("infosCollect")) || [],
    isHomeSearch: false,
    classIfy: JSON.parse(window.localStorage.getItem("classIfy")) || [],
    foodMaterial: JSON.parse(window.localStorage.getItem("foodMaterial")) || [],
    collect: JSON.parse(window.localStorage.getItem("collect")) || [],
    isHome: true,
    // map: JSON.parse(window.localStorage.getItem("map")) || new Map(),
    moreHistoryList: JSON.parse(window.localStorage.getItem("moreHistoryList")) || [],
    userMessage:JSON.parse(window.localStorage.getItem("userMessage")) || [],
    isUser: JSON.parse(window.localStorage.getItem("isUser")) || [true,"葛大爷"]
  },
  mutations: {
    // 登录注册
    adduserMessage:function(state,payload){
      // console.log(payload)
      state.userMessage.unshift(payload)
      localStorage.setItem("userMessage", JSON.stringify(state.userMessage));
    },
    updateIsUser:function(state,payload){
      // console.log(payload)
      state.isUser = payload
      localStorage.setItem("isUser", JSON.stringify(state.isUser));
    },
    // 喜欢
    updateInfos: function (state, payload) {
      state.infos = payload
    },

    // 针对收藏页面的infos
    addinfosCollect: function (state, payload) {
      state.infosCollect.unshift(payload)
      localStorage.setItem("infosCollect", JSON.stringify(state.infosCollect, ));
    },
    deleinfosCollect: function (state, index) {
      state.infosCollect.splice(index, 1)
      localStorage.setItem("infosCollect", JSON.stringify(state.infosCollect, ));
      if(!state.collect.length){
        // console.log(11111)
        localStorage.removeItem("infosCollect");
      }
    },

    // 我的收藏
    addCollect: function (state, payload) {
      state.collect.unshift(payload)
      localStorage.setItem("collect", JSON.stringify(state.collect));
    },
    deleCollect: function (state, index) {
      state.collect.splice(index, 1)
      localStorage.setItem("collect", JSON.stringify(state.collect));
      if(!state.collect.length){
        localStorage.removeItem("collect");
      }
    },

    // 菜篮子
    addClassIfy: function (state, payload) {
      state.classIfy.unshift(payload)

      // console.log(payload.materialList)

      for(var k in payload.materialList){
        let index = state.foodMaterial.findIndex(item => item.name === payload.materialList[k].name)
        // console.log(index)
        if(index != -1){
          // console.log("不存在的")
          state.foodMaterial[index].fName.unshift(payload.name);
          state.foodMaterial[index].dosage.unshift(payload.materialList[k].dosage);
          state.foodMaterial[index].id.unshift(payload.id);
        }else{
          let obj = {};
          obj.fName = [payload.name] ;
          obj.dosage = [payload.materialList[k].dosage];
          obj.name = payload.materialList[k].name;
          obj.id = [payload.id]
          state.foodMaterial.unshift(obj)
        }
      }
      localStorage.setItem("foodMaterial", JSON.stringify(state.foodMaterial));
      localStorage.setItem("classIfy", JSON.stringify(state.classIfy));
    },
    deleClassIfy: function (state, payload) {
      
      // console.log(payload)
      for(var j in state.foodMaterial){
        let index = state.foodMaterial[j].id.indexOf(payload.id)
          if(index != -1){
            state.foodMaterial[j].dosage.splice(index,1);
            state.foodMaterial[j].fName.splice(index,1);
            state.foodMaterial[j].id.splice(index,1);
          }
      }
      state.foodMaterial = state.foodMaterial.filter(item=> item.fName.length != 0);
      localStorage.setItem("foodMaterial", JSON.stringify(state.foodMaterial));
      if(!state.foodMaterial.length){
        localStorage.removeItem("foodMaterial");
      }

      for (var k in state.classIfy) {
        if (state.classIfy[k].id == payload.id) {
          state.classIfy.splice(k, 1);
        }
      }
      localStorage.setItem("classIfy", JSON.stringify(state.classIfy));
      if(!state.classIfy.length){
        localStorage.removeItem("classIfy");
      }
    },
    clearClassIfy: function (state) {
      state.foodMaterial = [];
      state.classIfy = [];
      localStorage.removeItem("classIfy");
      localStorage.removeItem("foodMaterial");
    },

    // 搜索页面的显示隐藏
    updateIsHomeSearch: function (state, payload) {
      state.isHomeSearch = payload
    },
    updateisHome: function (state, payload) {
      state.isHome = payload
    },

    // 浏览记录
    updateMoreHistoryList: function (state, payload) {
      // {a:10} == {a:10}为false，所以任何时候都会符合，使用独立的对比值解决
      if (!state.moreHistoryList.find((item) => item.id == payload.id)) {

        state.moreHistoryList.unshift(payload);
      } else {
        for (var k in state.moreHistoryList) {
          if (state.moreHistoryList[k].id == payload.id) {
            state.moreHistoryList.splice(k, 1);
            state.moreHistoryList.unshift(payload);
          }
        }
      }
      window.localStorage.setItem("moreHistoryList",JSON.stringify(state.moreHistoryList,));

    },
    // 清除浏览记录
    clearMoreHistoryList: function (state) {
      state.moreHistoryList = []
      localStorage.removeItem("moreHistoryList");
    },

  },
  actions: {},
  modules: {}
})