var $ = go.GraphObject.make;  // for conciseness in defining templates

myDiagram = $(go.Diagram, "structure-diagram",  // create a Diagram for the DIV HTML element
    {
    "undoManager.isEnabled": true  // enable undo & redo
    });

// define a simple Node template
myDiagram.nodeTemplate =
    $(go.Node, "Auto",  // the Shape will go around the TextBlock
    $(go.Shape, "RoundedRectangle", { strokeWidth: 0, fill: "white" },
        // Shape.fill is bound to Node.data.color
        new go.Binding("fill", "color")),
    $(go.TextBlock,
        { margin: 8, font: "bold 14px sans-serif", stroke: '#333' }, // Specify a margin to add some room around the text
        // TextBlock.text is bound to Node.data.key
        new go.Binding("text", "key"))
    );

// define a TreeLayout that flows from top to bottom
myDiagram.layout =
  $(go.TreeLayout,
    { angle: 90, layerSpacing: 35 });

// but use the default Link template, by not setting Diagram.linkTemplate

// create the model data that will be represented by Nodes and Links
myDiagram.model = new go.GraphLinksModel(
    [
    { key: "WET-BOEW", color: "lightblue" },
    { key: "GCWeb", color: "lightgreen" },
    { key: "GCIntranet", color: "lightgreen" },
    { key: "CDTS", color: "pink" },
    { key: "DotNetTemplates", color: "darkorchid" },
    { key: "JavaTemplates", color: "orange" }
    ],
    [
    { from: "WET-BOEW", to: "GCWeb" },
    { from: "WET-BOEW", to: "GCIntranet" },
    { from: "GCWeb", to: "CDTS" },
    { from: "GCIntranet", to: "CDTS" },
    { from: "CDTS", to: "DotNetTemplates" },
    { from: "CDTS", to: "JavaTemplates" }
    ]);
