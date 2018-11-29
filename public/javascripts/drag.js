$( ".droppable-area1, .droppable-area2, .dropabble-area3, .droppable-area4" ).sortable({
      connectWith: ".connected-sortable",
      stack: '.connected-sortable ul'
    }).disableSelection();

    $( ".droppable-area5, .droppable-area6, .dropabble-area7, .droppable-area8" ).sortable({
          connectWith: ".connected-sortable",
          stack: '.connected-sortable ul'
        }).disableSelection();
