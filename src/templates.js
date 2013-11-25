/*global window */
(function (olly) {
    "use strict";

    olly.templates = {
        youtube: '<embed width="420" height="345" src="{{embedURL}}" type="application/x-shockwave-flash"></embed>',
        vimeo: '<iframe src="{{embedURL}}" width="420" height="345" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        imgur: '<img src="{{embedURL}}" />',
        jsfiddle: '<iframe style="width: 100%; height: 300px" src="{{embedURL}}"></iframe>',
        twitter_tweet: {
            markup: '<blockquote class="twitter-tweet" lang="en"><p> <a href="{{embedURL}}"></a></blockquote>',
            scripts: ['//platform.twitter.com/widgets.js']
        },
        twitter_timeline: {
            markup: '<a class="twitter-timeline" href="{{embedURL}}"></a>',
            scripts: ['//platform.twitter.com/widgets.js']
        },
        github: {
            markup: '<div class="github-widget" data-repo="{{repo}}"></div>',
            scripts: [
                'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
                'https://raw.github.com/abeisgreat/GitHub-jQuery-Repo-Widget/master/jquery.githubRepoWidget.js'
            ]
        }
    };
    
}(window.olly));