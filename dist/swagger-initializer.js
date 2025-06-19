window.onload = () => {
  window.ui = SwaggerUIBundle({
    url: "./swagger.yaml",  // API 스펙이 정의된 YAML 파일 경로
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });
};
