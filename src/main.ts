import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://18.117.70.22:4200', 'http://localhost:4200'], // Frontend URL (e.g., your React app)
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed methods
    credentials: true, // Allow cookies or other credentials if needed
  });

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Video Ads API')
    .setDescription('API documentation for the Video Ads application')
    .setVersion('1.0')
    .addBearerAuth() // Optional: Add JWT authentication
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start the application
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger docs available at: http://localhost:${port}/api`);
}
bootstrap();
