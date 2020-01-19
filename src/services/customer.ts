import { Customer } from "../models/customer";
import { DatabaseProvider } from "../database";

export class CustomerService {
    public async getById(id: number): Promise<Customer> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Customer).findOne(id);
    }
}