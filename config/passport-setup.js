const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');
const FacebookStrategy=require('passport-facebook');
const TwitterStrategy=require('passport-twitter').Strategy;
const key=require('./keys');
const User=require('../models/user');

passport.serializeUser((user,done)=>{
  done(null,user.id);
});

passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
      done(null,user);
  });
});

passport.use(new GoogleStrategy({
    //Opciones de estretegia
    callbackURL:'/auth/google/redirect',
    clientID:key.google.clientID,
    clientSecret:key.google.clientSecret
  },(accessToken,refreshToken,profile,done)=>{
    // Comprobar que el usuario ya esta en mongo
    console.log(profile);
    User.findOne({_socialId:profile.id}).then((currentUser)=>{
      if(currentUser){
        // Ya tiene al usuario
        console.log('El usuario es:'+currentUser);
        console.log(profile);
        done(null,currentUser);
      }else{
        // No tiene al usuario entonces se crea
        new User({
          _fullName:profile.displayName,
          _socialId:profile.id,
          _thumbnail:profile._json.image.url
        }).save().then((newUser)=>{
          console.log('Usuario nuevo creado:'+newUser);
          done(null,newUser);
        });
      }
    });
  })
)

passport.use(new FacebookStrategy({
    clientID: key.facebook.appID,
    clientSecret: key.facebook.appSecret,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },(accessToken,refreshToken,profile,done)=>{
    // Comprobar que el usuario ya esta en mongo
    User.findOne({_socialId:profile.id}).then((currentUser)=>{
      if(currentUser){
        // Ya tiene al usuario
        console.log('El usuario es:'+currentUser);
        console.log(profile);
        done(null,currentUser);
      }else{
        // No tiene al usuario entonces se crea
        new User({
          _fullName:profile.displayName,
          _socialId:profile.id
        }).save().then((newUser)=>{
          console.log('Usuario nuevo creado:'+newUser);
          done(null,newUser);
        });
      }
    });
  })
)

passport.use(new TwitterStrategy({
    consumerKey: key.twitter.consumerKey,
    consumerSecret: key.twitter.consumerSecret,
    callbackURL: "http://localhost:3000/auth/twitter/callback"
  },(accessToken,refreshToken,profile,done)=>{
    // Comprobar que el usuario ya esta en mongo
    console.log(profile);
    User.findOne({_socialId:profile.id}).then((currentUser)=>{
      if(currentUser){
        // Ya tiene al usuario
        console.log('El usuario es:'+currentUser);
        console.log(profile);
        done(null,currentUser);
      }else{
        // No tiene al usuario entonces se crea
        new User({
          _fullName:profile.displayName,
          _socialId:profile.id,
          _thumbnail:profile._json.profile_image_url
        }).save().then((newUser)=>{
          console.log('Usuario nuevo creado:'+newUser);
          done(null,newUser);
        });
      }
    });
  })
);
