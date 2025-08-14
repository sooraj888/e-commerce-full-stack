export const apiGatewayConfiguration = () => ({
  environment: process.env['NODE_ENV'],
  port: parseInt(process.env['API_GATEWAY_PORT'] || '3001', 10),
});

export const userConfiguration = () => ({
  environment: process.env['NODE_ENV'],
  port: parseInt(process.env['USER_PORT'] || '3002', 10),
});
