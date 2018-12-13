import axios from 'axios'

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch (url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: data})
      .then(response => {
        resolve(response);
      }).catch(err => {
      reject(err);
    });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      });
  });
}
