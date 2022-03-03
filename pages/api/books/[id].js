/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../utils/dbConnect';
import Book from '../../../models/Book';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const book = await Book.findById(id);

                if (!book) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: book });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const book = await Book.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!book) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: book });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedBook = await Book.deleteOne({ _id: id });

                if (!deletedBook) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}