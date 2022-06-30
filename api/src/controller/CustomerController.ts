import {Get, JsonController, QueryParam } from 'routing-controllers'

@JsonController('/customer')
export class CustomerController {

    @Get('/')
    async getAllCustomer(@QueryParam('organisationId', {required: true}) organisationId: string) {
        return "hello success:::: " + organisationId;
        // return await listCustomers(organisationId);
    }



}