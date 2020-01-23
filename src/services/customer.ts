import { Customer } from "../models/customer";
import { DatabaseProvider } from "../database";

export class CustomerService {
    public async getById(id: number): Promise<Customer> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Customer).findOne(id);
    }

    public async create(customer: Customer): Promise<Customer> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Customer).save(customer);
    }

    public async list(): Promise<Customer> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Customer).findOne();
    }

    public async update(customer: Customer): Promise<Customer> {
        const connection = await DatabaseProvider.getConnection();
        const repo = connection.getRepository(Customer);
        const entity = await repo.findOne(customer.id);
        entity.firstName = customer.firstName;
        entity.lastName = customer.lastName;
        return await repo.save(entity);
    }

    public async delete(id: number): Promise<Customer> {
        const connection = await DatabaseProvider.getConnection();
        //return await connection.getRepository(Customer).delete(id);
        return await connection.getRepository(Customer).findOne();
    }
}

export const customerService = new CustomerService();