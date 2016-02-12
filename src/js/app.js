import User from './model/user';
import React from 'react';
import UserCollection from './model/userCollection';
import $ from 'jquery';

var user1 = new User({name: 'name1', email: 'email1'}),
  user2 = new User({name: 'name2', email: 'email2'});

user1.save(null, {
  success: (m1) => {
    document.write('save user1!');
    document.write('<p>' + m1.toString() + '</p>');
    var userCollection = new UserCollection(),
      user3 = userCollection.create({name: 'name3', email: 'email3'});
    user2.save(null, {
      success: (m2) => {
        document.write('save user2!');
        document.write('<p>' + m2.toString() + '</p>');
        userCollection.add(m1);
        document.write('collection not synced');
        document.write('<p>' + userCollection.toString() + '</p>');

        m2.save({email:'email4'}, {
          success: (m4) => {
            document.write('save user2!');
            document.write('<p>' + m4.toString() + '</p>');

            user3.save(null, {
              success: (m3) => {
                document.write('save user3!');
                document.write('<p>' + m3.toString() + '</p>');
                userCollection.fetch({
                  data: $.param({count:2}),
                  success: (c1) => {
                    document.write('collection 1st fetch');
                    document.write('<p>' + c1.toString() + '</p>');

                    c1.fetch({
                      data: $.param({count:2, lastNo:c1.at(c1.length - 1).get('no')}),
                      success: (c2) => {
                        document.write('collection 2st fetch');
                        document.write('<p>' + c2.toString() + '</p>');

                        m1.destroy();
                        m2.destroy();
                        m3.destroy();
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
