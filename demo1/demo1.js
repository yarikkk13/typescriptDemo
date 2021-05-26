function foo(user) {
    console.log(user.name.toUpperCase());
    return user.name.toUpperCase();
}

foo({name: 'vasya'});
foo({username:'vasya'})

// foo({username:'vasya'})