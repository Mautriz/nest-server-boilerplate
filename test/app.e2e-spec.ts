import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Body } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/ POST login', () => {
    return request(app.getHttpServer())
      .post('/login')
      .send({
        username: 'ciao',
        password: 'bruh',
      })
      .expect(201)
      .expect(res => res.body === true);
  });

  it('/ POST Login should fail with incorrect data', () => {
    return request(app.getHttpServer())
      .post('/login')
      .send({
        username: 2,
        password: 555,
      })
      .expect(400);
  });

  it('/ POST User should create a user', done => {
    return request(app.getHttpServer())
      .post('/user')
      .send()
      .expect(res => {
        console.log(res.body);
        expect(res.status).toBeLessThan(400);
      });
  });
});
