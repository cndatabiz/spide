/**
 * Created by tommy on 17-5-16.
 */

var rp      = require('request-promise');
var cheerio = require('cheerio');

var options = {
  uri: 'http://blog.csdn.net/experts.html',
  transform: function (body) {
        return cheerio.load(body);
  }
};

cols = [];

rp(options)
  .then(function ($) {
    $(".experts_list").each(function(i,element){
      var tags = $(this);
      var blogurl = tags.find("dt>a").attr("href");
      var expertName = tags.find(".expert_name").text();
      var address = tags.find("dd em").text();
      var job = tags.find("dd span");

      var blognums = tags.find(".fl").find("b").text();
      var readnums = tags.find(".fr").find("b").text();

      var expertinfo = {};

      expertinfo.blogurl = blogurl;
      expertinfo.expertName = expertName;
      expertinfo.address = address;
      expertinfo.job = job;
      expertinfo.blognums = blognums;
      expertinfo.readnums = readnums;

      cols.push(expertinfo);
    });
  })
  .then(function () {
    console.log('start...');
    cols.forEach(function (item,index) {
        console.log(index,item.expertName);
    });
  })
  .catch(function () {
    console.log('error...');
  });






