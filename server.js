require('simple-git')()
   .init()
   .add('./*')
   .commit("first commit!")
   .push('origin', 'master');
