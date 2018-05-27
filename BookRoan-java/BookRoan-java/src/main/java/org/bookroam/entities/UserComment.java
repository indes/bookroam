package org.bookmate.entities;

/**
 * Created by YT on 2018/5/27.
 */
public class UserComment {
    private String userId;
    private String forumCommentId;
    private int goodNum;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getForumCommentId() {
        return forumCommentId;
    }

    public void setForumCommentId(String forumCommentId) {
        this.forumCommentId = forumCommentId;
    }

    public int getGoodNum() {
        return goodNum;
    }

    public void setGoodNum(int goodNum) {
        this.goodNum = goodNum;
    }
}
