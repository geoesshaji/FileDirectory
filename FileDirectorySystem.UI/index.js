var ViewModal = (function () {
    var folderDirectory = ko.observableArray([]);
    folderDirectory( //Sample data for testing. To get data from server use ajax and convert the json to object and assign to this observable.
        [{
            id: 1,
            text: "assets",
            cssClass: "folder",
            type: 1,expandorCollapse:false,//type 1 for folder and type 2 for files
            items: [
              {
                  id: 11, type: 1,expandorCollapse:false, text: "css", cssClass: "folder", items: [{
                      id: 111, type: 1,expandorCollapse:false, text: "typography", cssClass: "folder", items: [{ id: 1111, text: "js", type: 1,expandorCollapse:false, cssClass: "folder", items: [] },
                      { id: 1113, type: 1,expandorCollapse:false, text: "images", cssClass: "folder", items: [] },
                      { id: 1112, type: 2,expandorCollapse:false, text: "functions.php", cssClass: "", items: [] }]
                  },
                  { id: 112, type: 2,expandorCollapse:false, text: "layout.css", cssClass: "", items: [] },
                  { id: 113, type: 2,expandorCollapse:false, text: "modules.css", cssClass: "", items: [] },
                  { id: 114, type: 2,expandorCollapse:false, text: "states.css", cssClass: "", items: [] },
                  { id: 115, type: 2,expandorCollapse:false, text: "theme.css", cssClass: "", items: [] }]
              },
              { id: 12, type: 1,expandorCollapse:false, text: "js", cssClass: "folder", items: [] },
              { id: 13, type: 1,expandorCollapse:false, text: "images", cssClass: "folder", items: [] },
              { id: 14, type: 2,expandorCollapse:false, text: "functions.php", cssClass: "", items: [] },
            ]
        },
        {
            id: 2,
            text: "templates",
            cssClass: "folder", type: 1,expandorCollapse:false,
            items: [
              { id: 21, type: 2,expandorCollapse:false, text: "bed linen", cssClass: "", items: [] },
              { id: 22, type: 2,expandorCollapse:false, text: "throws", cssClass: "", items: [] },
              { id: 23, type: 2,expandorCollapse:false, text: "curtains & blinds", cssClass: "", items: [] },
              { id: 24, type: 2,expandorCollapse:false, text: "rugs", cssClass: "", items: [] },
              { id: 25, type: 2,expandorCollapse:false, text: "carpets",cssClass: "", items: [] }
            ]
        },
        {
            id: 3,
            text: "style.css",
            cssClass: "folder", type: 1,expandorCollapse:false,
            items: [
            ]
        },
        {
            id: 4,
            text: "index.php",
            cssClass: "", type: 2,expandorCollapse:false,
            items: [
            ]
        }]
        );
    var getSubFoldersorFiles = function (data) {
        if (data.items.length > 0) {//to expand the folders or file that are already loaded.
            data.expandorCollapse = data.expandorCollapse?false:true;
        }
        else {
            if (data.type == 1) {//to call the ajax for only folders.
                data.items = [{ id: data.id + "1", text: "esm", cssClass: "folder", type: 1, expandorCollapse: false, items: [] }, { id: 4, text: "index.php", cssClass: "", type: 2, expandorCollapse: false, items: [] }];//new node form server.
                data.expandorCollapse = true;//expand to show the loaded files
            }
        }
        var folderDirectoryclone = folderDirectory();
        folderDirectory([]);
        folderDirectory(folderDirectoryclone);//to refresh the grid.
    }
    return {
        FolderDirectory: folderDirectory,
        GetSubFoldersorFiles: getSubFoldersorFiles
    }

})();
ko.applyBindings(ViewModal);
