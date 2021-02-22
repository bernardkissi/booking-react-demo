import { Server, Model, belongsTo, RestSerializer, Factory,trait, Response } from "miragejs"

export default function makeServer() {
  let server = new Server({
    models: {
      user: Model.extend({
        booking: belongsTo(),
        // profile: belongsTo()
      }),
  
      booking: Model.extend({
        user: belongsTo(),
      }),

      profile: Model.extend({
        user: belongsTo()
      })
    },
    
    factories: {
      user: Factory.extend({
          lastName: "sarpong",
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
      this.timing = 2000; 
      this.resource('user')
      this.resource('booking')
    //   this.resource('profile')
      this.get("/getBooking", (schema, request) => {
           const user = this.schema.users.findBy({lastName:request.queryParams.lastName})
           if(user){
              return user.booking.flight === request.queryParams.flight? 
                user.booking : new Response(400, { some: 'header' }, { errors: ['No booking was found for this user'] })
           }
           return new Response(400, { payload: 'header' }, { errors: [ 'No user was found'] });
      })
      this.post("/profiles", (schema, request) => {
          const attrs = JSON.parse(request.requestBody)
          return schema.profiles.create(attrs)
      })
    }
  
  })

  return server
}
