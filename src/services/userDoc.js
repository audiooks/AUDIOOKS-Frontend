import { db } from "../firebase";
import {
  doc,
    getDoc,
      setDoc,
        updateDoc,
          serverTimestamp,
          } from "firebase/firestore";

          // 🔹 Default schema for new users
          function makeUserDefaults(user) {
            return {
                UID: user.uid,
                    Email: user.email || "",
                        Name: user.displayName || "",
                            Photo: user.photoURL || "",
                                Cover_pic: "",
                                    Bio: "",
                                        Age: null,
                                            Country: "",
                                                Country_code: "",
                                                    Phone_number: "",
                                                        Language_preferred: [],
                                                            Categories_preferred: [],
                                                                Is_premium: false, // default
                                                                    Membership_status: "Free User", // linked to Is_premium
                                                                        Join_date: null, // set only after Edit Profile submit
                                                                            CreatedAt: serverTimestamp(),
                                                                                UpdatedAt: serverTimestamp(),
                                                                                  };
                                                                                  }

                                                                                  // 🔹 Ensure a Firestore document exists for the user
                                                                                  export async function ensureUserDoc(user) {
                                                                                    const ref = doc(db, "Users", user.uid);
                                                                                      const snap = await getDoc(ref);

                                                                                        if (!snap.exists()) {
                                                                                            await setDoc(ref, makeUserDefaults(user));
                                                                                              } else {
                                                                                                  // Update minimal fields on login
                                                                                                      await setDoc(
                                                                                                            ref,
                                                                                                                  {
                                                                                                                          Email: user.email || "",
                                                                                                                                  Name: user.displayName || "",
                                                                                                                                          Photo: user.photoURL || "",
                                                                                                                                                  UpdatedAt: serverTimestamp(),
                                                                                                                                                        },
                                                                                                                                                              { merge: true }
                                                                                                                                                                  );
                                                                                                                                                                    }

                                                                                                                                                                      return ref;
                                                                                                                                                                      }

                                                                                                                                                                      // 🔹 Save preferences (languages + categories)
                                                                                                                                                                      export async function savePreferences(uid, languages, categories) {
                                                                                                                                                                        const ref = doc(db, "Users", uid);
                                                                                                                                                                          await setDoc(
                                                                                                                                                                              ref,
                                                                                                                                                                                  {
                                                                                                                                                                                        Language_preferred: languages,
                                                                                                                                                                                              Categories_preferred: categories,
                                                                                                                                                                                                    UpdatedAt: serverTimestamp(),
                                                                                                                                                                                                        },
                                                                                                                                                                                                            { merge: true }
                                                                                                                                                                                                              );
                                                                                                                                                                                                              }

                                                                                                                                                                                                              // 🔹 Set Join_date only if not already set
                                                                                                                                                                                                              export async function setJoinDateIfEmpty(uid) {
                                                                                                                                                                                                                const ref = doc(db, "Users", uid);
                                                                                                                                                                                                                  const snap = await getDoc(ref);

                                                                                                                                                                                                                    if (!snap.exists()) throw new Error("User document does not exist.");

                                                                                                                                                                                                                      const data = snap.data();
                                                                                                                                                                                                                        if (!data?.Join_date) {
                                                                                                                                                                                                                            await updateDoc(ref, {
                                                                                                                                                                                                                                  Join_date: serverTimestamp(),
                                                                                                                                                                                                                                        UpdatedAt: serverTimestamp(),
                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              // 🔹 Toggle Premium (example for payments)
                                                                                                                                                                                                                                              export async function updatePremiumStatus(uid, isPremium) {
                                                                                                                                                                                                                                                const ref = doc(db, "Users", uid);
                                                                                                                                                                                                                                                  await updateDoc(ref, {
                                                                                                                                                                                                                                                      Is_premium: isPremium,
                                                                                                                                                                                                                                                          Membership_status: isPremium ? "Premium User" : "Free User",
                                                                                                                                                                                                                                                              UpdatedAt: serverTimestamp(),
                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                }