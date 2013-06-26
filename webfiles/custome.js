$(document).ready(function(){			
	replace_link();	
	replace_smiley();
})

function replace_link(){	
	jQuery("div.post-body").find("a").each(function(){					
		var a =  jQuery(this);		
		tmp_link = a.attr("href");		
		if ((tmp_link.indexOf("javascript:") == 0) || (tmp_link.indexOf("http://ah-shrimp.blogspot.com") == 0)){
		} else {
			a.attr("target", "_blank");
		}
	});
}

function replace_smiley() {	
		jQuery("div.post-body").each(function(){
			var $post = jQuery(this);		
			var new_content = $post.html();

			new_content = new_content.replace(/\s:-*\)/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/smile.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s;-*\)/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/blink.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s:-*\$/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/oops.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s:-*\(/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/sad.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s:-*D/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/lol.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s:-*p/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/tongue.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s:-*k/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/kiss.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s:-*\@/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/angry.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s:-*\#/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/sealed.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s:-*x/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/oh.png' style='border:0; margin:0; padding:0;'/> ");
	        new_content = new_content.replace(/\s:-*o/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/oeye.png' style='border:0; margin:0; padding:0;'/> ");
			new_content = new_content.replace(/\s:-*p/g, " <img id='new' src='http://sites.google.com/site/matthewhkh/file/tongue.png' style='border:0; margin:0; padding:0;'/> ");	
			
			this.innerHTML = new_content;
			//$post.html("").html(new_content);
	})
}