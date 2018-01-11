function ft_read()
{
    return (JSON.parse(window.localStorage.getItem('coord')));
}

function ft_displayContact()
{
    contactList = ft_read();
    if(contactList)
    {
        for (let coord of contactList)
        {
            item = $('<article class="contactItem"></article>');
            title = $('<h2></h2>');
            div = $('<div class="contactEntry"></div>');
            form = $('<form class="editContact"></form>');
            button= $('<button class="launchEdition">Editer le contact</button>');
            submit = $('<input class="edit" type="submit" value="Confirmer">');
            for (let x in coord)
            {
                if (x=='id')
                {
                    paragraph = $('<p class="id"></p>');
                    input = $("<input class='"+x+"' name='"+x+"'type='text' value='"+coord[x]+"'>");
                    paragraph.text(x+" : "+coord[x]);
                }
                else
                {
                    paragraph = $('<p></p>')
                    input = $("<input name='"+x+"'type='text' value='"+coord[x]+"'>");
                    paragraph.text(x+" : "+coord[x]);
                }
                label = $("<label for='"+x+"'>")

                if (x=='Nom' || x == 'Prénom')
                {
                    title.append(coord[x]+" ");
                }
                div.append(paragraph);
                form.append(input, label);
            }
            form.append(submit);
            div.append(button, form);
            item.append(title, div);
            $('.addressBook').append(item);

        }
      }
  console.log('ok');
  }
