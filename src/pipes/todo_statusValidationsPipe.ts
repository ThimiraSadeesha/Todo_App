import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { todo_status } from "src/entity/todo.entity";


export class TodoStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [todo_status.OPEN, todo_status.WIP, todo_status.COMPLETED];
    transform(value: any, metadata: ArgumentMetadata): any {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is an invalid status.`);
        }
        return value;
    }
    private isStatusValid(status: any) {
        const index = this.allowedStatus.indexOf(status);
        return index !== -1;
    }
}