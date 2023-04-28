import http from "./../axios";

export const egGet = () =>
  http({
    url: "/api/system-config",
    method: "GET",
    // params: data,
  });

export const egPost = (data) =>
  http({
    url: "/api/eg-post",
    method: "POST",
    data: data,
  });
