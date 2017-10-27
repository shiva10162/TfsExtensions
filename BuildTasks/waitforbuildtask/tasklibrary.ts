import taskLibrary = require("vsts-task-lib/task");

export enum TaskResult {
    Failed,
    Succeeded,
    SucceededWithIssues
}

export interface ITaskLibrary {
    getBoolInput(name: string, isRequired: boolean): boolean;
    getInput(name: string, isRequired: boolean): string;
    getDelimitedInput(name: string, delimeter: string, isRequired: boolean): string[];
    setResult(result: TaskResult, message: string): void;
    getVariable(name: string): string;
    setVariable(name: string, value: string): void;
}

export class TaskLibrary implements ITaskLibrary {

    getDelimitedInput(name: string, delimeter: string, isRequired: boolean): string[] {
        return taskLibrary.getDelimitedInput(name, delimeter, isRequired);
    }
    getBoolInput(name: string, isRequired: boolean): boolean {
        return taskLibrary.getBoolInput(name, isRequired);
    }
    getInput(name: string, isRequired: boolean): string {
        return taskLibrary.getInput(name, isRequired);
    }

    public setVariable(name: string, value: string): void {
        taskLibrary.setVariable(name, value);
    }

    public getVariable(variableName: string): string {
        return taskLibrary.getVariable(variableName);
    }

    public setResult(result: TaskResult, message: string): void {
        taskLibrary.setResult(result, message);
    }
}