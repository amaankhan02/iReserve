CREATE TRIGGER UpdateRatingTrigger
    AFTER INSERT ON reservation FOR EACH ROW
    BEGIN
        SET @popularity = (SELECT r.Popularity FROM room r WHERE r.RoomID = new.RoomID LIMIT 1);
        IF @popularity <= 80 THEN
            SET @popularity = @popularity + 1;
            UPDATE room SET Popularity = @popularity WHERE RoomID = new.RoomID;
        END IF;
    END;
