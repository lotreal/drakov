var helper = require('./lib');
var request = require('supertest')('http://localhost:' + helper.port);

describe('/api/things', function(){
    describe('GET', function(){
        it('should respond with json collection from contract example', function(done){
            request.get('/api/things')
            .expect(200)
            .expect('Content-type', 'application/json; charset=utf-8')
            .expect([
                {text:'Zip2',id: '1'},
                {text: 'X.com', id: '2'},
                {text: 'SpaceX', id: '3'},
                {text: 'Solar City', id: '4'},
                {text: 'Hyperloop', id: '5'}
            ])
            .end(helper.endCb(done));
        });
    });
});

describe('/api/things/{thingId}', function(){
    describe('GET', function(){
        it('should respond with json object from contract example', function(done){
            request.get('/api/things/1111')
            .expect(200)
            .expect('Content-type', 'application/json; charset=utf-8')
            .expect([{text: 'Zip2', id: '1'}
                ])
            .end(helper.endCb(done));
        });
    });

    describe('POST', function(){
        it('should respond with json object from contract example', function(done){
            request.post('/api/things/1111')
            .set('Content-type', 'application/json')
            .send({text: 'Hyperspeed jet', id: '1'})
            .expect(200)
            .expect('Content-type', 'application/json; charset=utf-8')
            .expect({text: 'Hyperspeed jet', id: '1'})
            .end(helper.endCb(done));
        });
    });
});
