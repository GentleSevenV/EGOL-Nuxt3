export const apiCore = (url, options) => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return useFetch(url, {
    baseURL: config.public.baseURL,
    onRequest({ options }) {
      let token = "";

      // 判断是否为客户端渲染，因为token一般获取之后是保存在客户端（浏览器）的locaStorage中的，只有在客户端渲染的时候才可以通过localStorage去获取里面的token，进而保存进options.headers中进行携带token式的发送网络请求
      if (import.meta.client) {
        token = localStorage.getItem("token");
      }
      options.headers = {
        Authorization: `Bearer ${token}`,
        ...options.headers,
      };
    },
    // 响应拦截器，发送网络请求之后，打印response这个对象，可以发现当响应成功时(status值一般是>=200且<300)，response.ok为true，只会触发onResponse这个拦截器，但是当响应发生错误时(status值一般是>400)，response.ok为false，则既会触发onResponse拦截器，也会触发onResponseError拦截器
    onResponse({ response }) {
      // 所以为了让响应发生错误时，不触发onResponse这个拦截器，我们可以通过判断response中status的值来进行区分
      if (response.status >= 200 && response.status < 300) {
        // 然后再进行判断后端自定义的返回值code码不等于200时（也就是发生自定义的错误响应时）
        // 注意：此处的200是后端服务正确返回数据的情况下，数据中的code的值，一定要和此处保持一致，否则会一直跳转myError页面，比如cooladmin中正常返回时，code值为1000，通用异常为1001，验证异常为1002，核心异常为1003
        if (response._data.code !== 1000) {
          if (import.meta.client) {
            // 如果安装了elementplus等框架可以使用框架内的组件进行提示
            ElMessage.error(response._data.code + " " + response._data.message);
            // console.log(response._data.code + " " + response._data.message);
          } else {
            nuxtApp.runWithContext(() => {
              navigateTo({
                path: "/myError",
                query: {
                  code: response._data.code,
                  message: response._data.message,
                },
              });
            });
          }
        }
      }
    },
    // 响应发生错误时(status值一般是>400)，执行onResponseError
    onResponseError({ response }) {
      console.log("onResponseError", response);
      if (import.meta.client) {
        console.log("1111111");
        // 如果安装了elementplus等框架可以使用框架内的组件进行提示
        ElMessage.error(response._data.code + " " + response._data.message);
        // console.log(response._data.code + " " + response._data.message);
      } else {
        nuxtApp.runWithContext(() => {
          navigateTo({
            path: "/myError",
            query: {
              code: response._data.code,
              message: response._data.message,
            },
          });
        });
      }
    },
    ...options,
  });
};

export const GetApi = (url, options) => {
  return new Promise((resolve, reject) => {
    apiCore(url, {
      method: "GET",
      ...options,
    })
      .then((res) => {
        resolve(res.data.value);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const PostApi = (url, options) => {
  return new Promise((resolve, reject) => {
    apiCore(url, {
      method: "POST",
      ...options,
    })
      .then((res) => {
        resolve(res.data.value);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
