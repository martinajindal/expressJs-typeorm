import { Get, JsonController, QueryParam } from 'routing-controllers'

@JsonController('/orders')
export class OrderController {

    @Get('/')
    async getAlOrders(@QueryParam('organisationId', { required: true }) organisationId: string) {
        return "hello success:::: " + organisationId;
    }
}
