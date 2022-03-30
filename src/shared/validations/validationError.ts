import { HttpException, HttpStatus } from "@nestjs/common";

export default function ValidationException(message: string) {
    this.message = message;
    throw new HttpException(message, HttpStatus.BAD_REQUEST);
}
