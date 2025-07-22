import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  const mockClientProxy = {
    send: jest.fn().mockImplementation(() => ({
      toPromise: () => Promise.resolve(6), // mock sum of [1, 2, 3]
    })),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);

    appController.client = {
      send: jest.fn().mockReturnValue(6),
    } as any;
  });

  describe('root', () => {
    it('should return any number', () => {
      expect(appController.getHello()).toEqual(expect.any(Number));
    });
  });
});
