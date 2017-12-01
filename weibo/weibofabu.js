/**
 * Created by wanghongjiang on 2017/6/11.
 */

$(function(){
  // 1 鼠标移到话题上展开话题列表
  // $("#topic").mouseenter(function(){
  //   $("#topics").show();
  // })
  // $("#topics").mouseleave(function(){
  //   $("#topics").hide();
  // })

  //点击话题列表中的li标签把选中话题添加到文本域中
  // $("#topics>li").click(function(){
  //   $('#content').val($('#content').val()+"#"+$(this).text());
  // })


  // 2 鼠标移到朋友上展开朋友列表
  $("#friend").mouseenter(function(){
    $("#friends").show();
  })
  $("#friends").mouseleave(function(){
    $("#friends").hide();
  })
  //点击朋友列表中的li标签把选中的朋友添加到文本域中
  $("#friends>li").click(function(){
    $('#content').val($('#content').val()+"@"+$(this).text());
  })


  // 3 鼠标移到表情上展开表情列表
  $("#face").mouseenter(function(){
    $("#faces").show();
  })
  $("#faces").mouseleave(function(){
    $("#faces").hide();
  })


  //点击照片图片上传到#upload中以便用于发表图片说说
  $("#pic").change(function () {
    isClickEnable = true;
    var file = this.files.item(0);
    var url = window.URL.createObjectURL(file);
    $('#upload').attr('src',url);
  });


  //监测输入字数：
  $("#content").keyup(function(){
    var contents=$("#content").val();
    var numSurplus=150-$("#content").val().length  //剩余可输入字数
    $("#numSurplus").text(numSurplus)   //把剩余可输入字数添加到#numSurplus中
    if(numSurplus>150){
      var newContents=contents.substring(0,150);
      $("#content").text(newContents);
    }
  })



//点击广播按钮发布信息（往.mamessage中添加元素）
 $("#sendBtn").click(function(){
   var SRC=$("#upload").attr("src");
   var txt = $('#content').val();

   $('<div class="w myspeech" id="myspeech">'
     +'<img src="image/icon.jpg"/>'
     +'<div class="speechContent">'
     +'<p>'+txt+'</p>'
     +'<p><img src='+SRC+' alt=""/></p>'
     +'<p>'+new Date().toLocaleString()+'</p>'
     +'<span id="del">删除</span>'
     +'</div>'
     +'  </div>').prependTo(".message");

   //清空文本域内容，以便输入新的内容
   $('#content').val("");

   //如果选中左方向键，.myspeech>img左浮动，反之右浮动
   if($("#left").prop("selected")==true){
    $(".myspeech>img:first").css("float","left")
   }else{
     $(".myspeech>img:first").css("float","right")
   }
 })

//点击删除按移除当前发表的说说
  $(".message").on("click","#del",function(){
    $(this).parent().parent().remove();
  })




})
