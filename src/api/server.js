import { Server, Model, belongsTo, RestSerializer, Factory,trait, Response } from "miragejs"
import faker from "faker"

export default function makeServer() {
  let server = new Server({
    models: {
      user: Model.extend({
        booking: belongsTo(),
      }),
  
      booking: Model.extend({
        user: belongsTo(),
      })
    },
    
    factories: {
      user: Factory.extend({
          lastName: "owiredu",
          firstName: faker.name.firstName(),
          nationality: '',
          email: '',
          passportNumber: '',
          country: '',
          city: '',
          birthDate: '',
          birthPlace: '',
          passportIssue: '',
          expiryDate: '',
          countryOfIssue: '',
          cityOfIssue: '',
          address: '',
        withBooking: trait({
          afterCreate(user, server) {
            server.createList('booking', 1, {
              user: user, flight: "705707"
            });
          }
        }),
      })
    },
  
    seeds(server) {
      server.create("user", "withBooking");
      console.log(server.db.dump())
    },
    
    serializers: {
      user: RestSerializer.extend({
        include: ['booking'],
        embed: true
      }),
      booking: RestSerializer.extend({
        include: ['user'],
        embed:true
      }),
    },
    
    routes() {
      this.timing = 2000; // default
      this.resource('user')
      this.resource('booking')
      this.get("/getBooking", (schema, request) => {
           console.log(request.queryParams.flight)
           const user = this.schema.users.findBy({lastName:request.queryParams.lastName})
           if(user){
              return user.booking.flight === request.queryParams.flight? 
                user.booking : new Response(400, { some: 'header' }, { errors: ['No booking was found for this user'] })
           }
           return new Response(400, { payload: 'header' }, { errors: [ 'No user was found'] });
      })
    }
  
  })

  return server
}
