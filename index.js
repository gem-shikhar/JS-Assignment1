table_create();
function table_create() {
  let table = document.createElement("table");
  table.className='table_body'
  document.body.append(table);
  table.style.border = "2px solid";
  let table_head=document.createElement("thead");
  table.append(table_head);
  const rows = ["Name", "Age", "DOB", "email", "Company"];
  for (let sub_row in rows) {
    var th = document.createElement("th");
    th.className="head_class";
    var th_text = document.createTextNode(rows[sub_row]);
    th.appendChild(th_text);
    table.appendChild(th);
    table_head.appendChild(th);
    // th.style.border = "2px solid";
    // th.style.fontWeight = "bold";
  }
  const data = [
    [
      "Shikhar Chaurasia",
      22,
      "05/01/2000",
      "shikharchaurasia9987@gmail.com",
      "Gemini Solutions Pvt. Ltd",
    ],
    ,
    ["Ayush Yadav", 22, "16/08/2000", "ayushyadav442@gmail.com", "Microsoft"],
    [
      "Ashutosh Singh",
      22,
      "10/04/2000",
      "ashutosh.singh@gmail.com",
      "Atlassian",
    ],
    ["Rajat Singh", 22, "12/09/2000", "rajatsingh32@gmail.com", "Sprinklr"],
    [
      "Shashank Singh",
      23,
      "11/06/1999",
      "singhshashank221@gmail.com",
      "Nucleus Software",
    ],
  ];
  for (let j in data) {
    var tr = document.createElement("tr");
    // tr.style.border = "2px solid black";
    for (let k in data[j]) {
      var rowText = document.createTextNode(data[j][k]);
      var td = document.createElement("td");
      //td.style.border = "2px solid";
      td.append(rowText);
      console.log(td);
      tr.append(td);
    }
    table.append(tr);
  }
  console.log(table);
}
