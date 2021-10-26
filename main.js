const LinksSocialMedia = {
  github: 'carinetoledo',
  instagram: 'carinetoledo',
  youtube: 'https://www.youtube.com/channel/UC6v6OQuLy_MLRw-N7n2VA8g',
  whatsapp: 'http://api.whatsapp.com/send?phone=5517981039282'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent="Olívia"

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //alert (url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //alert (data.bio))
      userBio.textContent = data.bio
      //userPhoto.src = data.avatar_url
    })
}
getGitHubProfileInfos()
