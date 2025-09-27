interface BaseUrls {
  main: string;
  chart: string;
}

const getBaseUrls = (): BaseUrls => {
  return {
    main: 'http://109.206.252.58:8080',
    chart: 'http://109.206.252.58:8090',
  };
};

export default getBaseUrls();
