package org.bookmate.entities;

import java.util.List;

/**
 * Created by YT on 2018/5/26.
 */
public class UserCommentBook {
    private List<String> jieshuList;
    private List<String> shareList;
    private List<String> comment;

    public List<String> getJieshuList() {
        return jieshuList;
    }

    public void setJieshuList(List<String> jieshuList) {
        this.jieshuList = jieshuList;
    }

    public List<String> getShareList() {
        return shareList;
    }

    public void setShareList(List<String> shareList) {
        this.shareList = shareList;
    }

    public List<String> getComment() {
        return comment;
    }

    public void setComment(List<String> comment) {
        this.comment = comment;
    }
}
