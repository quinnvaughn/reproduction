module helpers {
    abstract type CreatedAndUpdatedAt {
        required property created_at -> datetime {
            default := datetime_current();
            readonly := true;
        }
        required property updated_at -> datetime {
            default := datetime_current();
        }
    }
}