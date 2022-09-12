import 'reflect-metadata'
import { Container } from 'inversify';

import { ApiManager, ToDoClient } from '../api';
import { TYPES } from '../types'
import { MockApiManager, MockClient, mockItems } from '../mock';

const container = new Container()

beforeAll(() => {
    try{
        container.bind<ToDoClient>(TYPES.ToDoClient).to(MockClient)
        container.bind<ApiManager>(TYPES.ApiManager).to(MockApiManager)
    } catch(err) {
        console.log(err)
    }
})

afterAll(() => {
    container.unbindAll()
})

describe('Test Client fetch', () => {
    it('should inject correct client', () => {
        const cli = container.get<ToDoClient>(TYPES.ToDoClient)

        expect(cli.fetch('dummyUrl')).toStrictEqual(mockItems)
    })
})


describe('Test ApiManager fetchData', () => {
    it('should return mock response', () => {
        const apiManager = container.get<ApiManager>(TYPES.ApiManager)

        expect(apiManager.fetchData('dummyUrl')).toStrictEqual(mockItems)
    })
})


