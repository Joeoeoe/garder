import { IReportError } from 'garder-common';

const request = function (dataArray: Array<IReportError>) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log('响应成功');
    }
  };

  // TODO 待填充url
  xhr.open('POST', 'http://localhost:3000/collect');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({ data: dataArray }));
};

export { request };
