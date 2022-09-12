import { injectable } from "inversify";

import { ApiManager, IToDo, ToDoClient } from "./api";

export const mockItems: IToDo[] = [
    {
        id: 1,
        userId: 1,
        title: 'test',
        completed: true
    },
    {
        id: 2,
        userId: 2,
        title: 'test',
        completed: false
    }
]

@injectable()
export class MockClient implements ToDoClient{
    fetch(url:string) {
        return mockItems
    }
}

@injectable()
export class MockApiManager extends ApiManager{
    client = new MockClient()
    fetchData(url: string): IToDo[] | undefined {
       return this.client.fetch('')
    }
}