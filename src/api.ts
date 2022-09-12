import "reflect-metadata";
import { injectable, inject } from "inversify";

import { TYPES } from "./types";

export interface IToDo {
    id: number,
    userId: number,
    title: string,
    completed: Boolean
}

export interface ToDoClient {
    fetch(url:string) : IToDo[]
}

@injectable()
export class ApiManager{
    constructor(@inject(TYPES.ToDoClient) public client: ToDoClient) {
        this.client = client
    }

    fetchData(url: string) {
        try {
            return this.client.fetch(url)
        } catch(err) {
            console.log(err)
        }
    }
}