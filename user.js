function loadUser(uid) {
    if (uid) {
        var userDoc = db.collection('users').doc(uid);

        userDoc.get().then(function(doc) {
            if(doc.exists) {
                let userData = doc.data();

                $('input.userName').val(userData.name);
                $('p.userName').text(userData.name);

                $('input.userAffiliation').val(userData.affiliation);
                $('p.userAffiliation').text(userData.affiliation);

                if (userData.pic) {
                    $('img.userImage').attr('src', userData.pic);
                }
                else {
                    $('img.userImage').attr('src', 'http://perryma.tk/CPUClub/nopic.png');
                }
            }
        });
    }
    else {
        $('input.userName').val("");
        $('p.userName').text("");

        $('input.userAffiliation').val("");
        $('p.userAffiliation').text("");

        $('img.userImage').attr('src', "");
    }
}

function updateUserInfo(uid) {
    let userData = {};
    userData['name'] = $('#userNameInput').val();
    userData['affiliation'] = $('#affiliationInput').val();
    userData['pic'] = $('#userImage').attr('src');
    
    console.log(userData);
    
    db.collection('users').doc(uid).update(userData).then(
        function () {
            $('updateUser').prop("disabled", true);
        });
    
    
    return false;
}